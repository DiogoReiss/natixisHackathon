import google.generativeai as genai
import os
import requests
from bs4 import BeautifulSoup
import json
import time
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

# Configure the Generative AI model
genai.configure(api_key=os.environ["API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")

def generate_detailed_summary(summary, symbol):
    prompt = (
        f"Write a detailed summary focused on investment-related news about {symbol}. Highlight key opportunities, "
        "risks, and trends based on the following text. Present the best news for potential investors and conclude with actionable insights.\n\n"
        f"Text:\n{summary}"
    )
    logging.debug(f"Generating detailed summary for symbol {symbol}")
    response = model.generate_content(prompt)
    return response.text.strip()

def summarize_text(text):
    prompt = (
        "Summarize the following text into a cohesive and comprehensive paragraph focusing on investment-related news.\n\n"
        f"Text:\n{text}"
    )
    logging.debug("Summarizing text")
    response = model.generate_content(prompt)
    return response.text.strip()

def fetch_article_text(url):
    logging.debug(f"Fetching article text from URL: {url}")
    try:
        article_page = requests.get(url)
        article_page.raise_for_status()
        soup = BeautifulSoup(article_page.content, "html.parser")
        paragraphs = soup.find_all('p')
        article_text = ' '.join([para.get_text() for para in paragraphs])
        return article_text
    except requests.RequestException as e:
        logging.error(f"Failed to retrieve article: {url} (Error: {e})")
        return f"Error: {e}"

def process_symbol_from_file(symbol, data):
    logging.debug(f"Processing symbol: {symbol}")

    if "feed" in data:
        logging.debug(f"Found news feed for symbol {symbol}")
        combined_text = ""

        for article in data["feed"][:5]:
            logging.debug(f"Fetching article URL: {article['url']}")
            combined_text += fetch_article_text(article["url"]) + "\n\n"
            time.sleep(1)  # Delay to avoid hitting API quotas

        logging.debug(f"Combining and summarizing text for symbol {symbol}")
        combined_summary = summarize_text(combined_text)
        detailed_summary = generate_detailed_summary(combined_summary, symbol)

        append_to_json({
            "symbol": symbol,
            "detailed_summary": detailed_summary,
        })

        return {
            "symbol": symbol,
            "detailed_summary": detailed_summary,
        }
    else:
        logging.debug(f"No news feed available for symbol {symbol}")
        return {"symbol": symbol, "error": "No news available."}

def append_to_json(data, filename='investment_news.json'):
    logging.debug(f"Appending data to {filename}")
    try:
        if os.path.exists(filename):
            with open(filename, "r") as json_file:
                try:
                    existing_data = json.load(json_file)
                except json.JSONDecodeError:
                    logging.error(f"{filename} is empty or corrupt. Initializing with an empty list.")
                    existing_data = []
        else:
            existing_data = []

        existing_data.append(data)

        with open(filename, "w") as json_file:
            json.dump(existing_data, json_file, indent=4)

        logging.debug(f"Data successfully appended to {filename}")
    except Exception as e:
        logging.error(f"Error appending to JSON: {e}")

def fetch_news_for_symbols_from_file(symbols, filename='data.json'):
    logging.debug("Fetching news for symbols from file")
    try:
        with open(filename, "r") as file:
            data = json.load(file)

        for symbol in symbols:
            result = process_symbol_from_file(symbol, data)
            logging.debug(f"Processed result for symbol: {result.get('symbol', 'unknown')}")
            time.sleep(1)  # Delay to avoid hitting API quotas

    except Exception as e:
        logging.error(f"Error reading from {filename}: {e}")

symbols = ["MSTR", "COIN", "TSLA", "GEO", "CVS", "JCI", "BCS", "BAC", "QCOM", "GSIVZ", "WT", "DJT"]
fetch_news_for_symbols_from_file(symbols)