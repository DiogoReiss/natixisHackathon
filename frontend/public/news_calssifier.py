import json
import logging
from dataclasses import dataclass, asdict
from typing import List, Optional, Dict

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

@dataclass
class NewsAnalysis:
    market_impact: str
    impact_score: float
    signal_strength: float
    priority_level: str
    time_sensitivity: str
    key_factors: List[str]
    market_analysis: str
    source_quality: str

class EnhancedNewsClassifier:
    def __init__(self):
        self.trusted_sources = {"Bloomberg", "Reuters", "CNBC", "MarketWatch", "TechCrunch"}
        self.market_signals = {
            "revenue growth": 2.0,
            "record revenue": 2.5,
            "profit increase": 2.0,
            "new regulations": -1.5,
            "regulatory changes": -1.8,
            "funding round": 1.8,
            "secured funding": 1.7,
            "retail sales decline": -2.0,
            "consumer spending slows": -2.2,
            "oil prices dip": -1.0,
            "market demand slows": -1.3,
            "global demand slowdown": -1.5,
            "economic uncertainty": -2.0,
            "stock surge": 2.2,
            "stock rally": 2.5,
            "quarterly earnings miss": -2.2,
            "layoffs": -1.5,
            "acquisition": 2.0,
            "merger talks": 1.5,
            "breaking": 0.5,  # keyword for urgency
            "urgent": 0.5,    # keyword for urgency
            "critical": 0.5   # keyword for urgency
        }
        self.time_sensitivity_keywords = {"urgent", "breaking", "critical"}

    # Remaining code is the same as previously improved version


    def add_trusted_source(self, source: str):
        self.trusted_sources.add(source)
        logging.info(f"Added trusted source: {source}")

    def add_market_signal(self, keyword: str, weight: float):
        self.market_signals[keyword.lower()] = weight
        logging.info(f"Added market signal: {keyword} with weight {weight}")

    def analyze_news(self, news: Dict[str, str]) -> Optional[NewsAnalysis]:
        source = news.get("source", "").strip()
        if not self.is_source_trusted(source):
            logging.warning(f"Untrusted source: {source}. Skipping analysis.")
            return None

        title = news.get("title", "").lower()
        description = news.get("description", "").lower()
        combined_text = f"{title} {description}"

        impact_score = sum(
            weight for keyword, weight in self.market_signals.items() if keyword in combined_text
        )
        signal_strength = abs(impact_score / max(self.market_signals.values(), default=1))
        market_impact = (
            "SIGNIFICANT_POSITIVE" if impact_score > 1
            else "NEGATIVE" if impact_score < -1
            else "NEUTRAL"
        )
        priority_level = (
            "HIGH" if abs(impact_score) > 1.5
            else "MEDIUM" if abs(impact_score) > 0.5
            else "LOW"
        )
        time_sensitivity = (
            "URGENT" if any(word in combined_text for word in self.time_sensitivity_keywords)
            else "NORMAL"
        )
        key_factors = [keyword for keyword in self.market_signals if keyword in combined_text]
        market_analysis = (
            f"Strong market signals detected with {market_impact.lower()} implications."
            f" Key factors include {', '.join(key_factors)}."
        )
        source_quality = "TIER_1" if source in self.trusted_sources else "UNKNOWN"

        return NewsAnalysis(
            market_impact=market_impact,
            impact_score=impact_score,
            signal_strength=signal_strength,
            priority_level=priority_level,
            time_sensitivity=time_sensitivity,
            key_factors=key_factors,
            market_analysis=market_analysis,
            source_quality=source_quality
        )

    def is_source_trusted(self, source: str) -> bool:
        return source in self.trusted_sources

    def process_json_file(self, json_file: str):
        try:
            with open(json_file, "r") as file:
                news_items = json.load(file)
                if not isinstance(news_items, list):
                    logging.error("JSON data is not a list of news items. Please check the file format.")
                    return []

                results = []
                for idx, news_item in enumerate(news_items):
                    if not isinstance(news_item, dict):
                        logging.warning(f"Skipping invalid news item at index {idx}.")
                        continue

                    analysis = self.analyze_news(news_item)
                    results.append({
                        "news": news_item,
                        "analysis": asdict(analysis) if analysis else None
                    })

                return results
        except FileNotFoundError:
            logging.error("The specified JSON file was not found.")
            return []
        except json.JSONDecodeError as e:
            logging.error(f"Failed to decode JSON: {e}")
            return []

if __name__ == "__main__":
    classifier = EnhancedNewsClassifier()
    results = classifier.process_json_file("news_examples.json")

    for idx, result in enumerate(results, start=1):
        news = result["news"]
        analysis = result["analysis"]

        print(f"\n--- News Item {idx} ---")
        print(f"Title: {news.get('title', 'N/A')}")
        print(f"Description: {news.get('description', 'N/A')}")
        print(f"Source: {news.get('source', 'N/A')}")

        print("\nAnalysis:")
        if analysis:
            for key, value in analysis.items():
                print(f"{key.capitalize()}: {value}")
        else:
            print("Analysis unavailable or the source is not trusted.")
