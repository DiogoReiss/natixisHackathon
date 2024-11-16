package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "portfolio")
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user", nullable = false, referencedColumnName = "id")
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_sector_investment", nullable = false, referencedColumnName = "id")
    @JsonIgnore
    private SectorInvestment sectorInvestment;

    // Default constructor
    public Portfolio() {}

    // Constructor
    public Portfolio(User user, SectorInvestment sectorInvestment) {
        this.user = user;
        this.sectorInvestment = sectorInvestment;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public SectorInvestment getSectorInvestment() {
        return sectorInvestment;
    }

    public void setSectorInvestment(SectorInvestment sectorInvestment) {
        this.sectorInvestment = sectorInvestment;
    }
}