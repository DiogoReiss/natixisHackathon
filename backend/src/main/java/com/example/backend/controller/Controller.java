package com.example.backend.controller;

import com.example.backend.Repository.*;
import com.example.backend.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.ConditionalOnGraphQlSchema;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/v1")
public class Controller {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private NewsRepository newsRepository;

    @Autowired
    private InvestmentsRepository investmentsRepository;

    @Autowired
    private SectorRepository sectorRepository;

    @Autowired
    private SectorInvestmentRepository sectorInvestmentRepository;

    @Autowired
    private PortfolioRepository portfolioRepository;

    @GetMapping("/")
    public String index() {
        return "Hello world";
    }

    // Users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // News
    @GetMapping("/news")
    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    // Investments
    @GetMapping("/investments")
    public List<Investments> getAllInvestments() {
        return investmentsRepository.findAll();
    }

    @PostMapping("/investments")
    public Investments createInvestment(@RequestBody Investments investment) {
        return investmentsRepository.save(investment);
    }

    // Sectors
    @GetMapping("/sectors")
    public List<Sector> getAllSectors() {
        return sectorRepository.findAll();
    }

    @PostMapping("/sectors")
    public Sector createSector(@RequestBody Sector sector) {
        return sectorRepository.save(sector);
    }

    // Sector Investments
    @GetMapping("/sector-investments")
    public List<SectorInvestment> getAllSectorInvestments() {
        return sectorInvestmentRepository.findAll();
    }

    @PostMapping("/sector-investments")
    public SectorInvestment createSectorInvestment(@RequestBody SectorInvestment sectorInvestment) {
        return sectorInvestmentRepository.save(sectorInvestment);
    }

    // Portfolio
    @GetMapping("/portfolios")
    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }

    @PostMapping("/portfolios")
    public Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    @GetMapping("/portfolio/{userId}")
    public List<Object[]> getSectorAndInvestment(@PathVariable Long userId) {
        return portfolioRepository.findSectorAndInvestmentByUserId(userId);
    }
}
