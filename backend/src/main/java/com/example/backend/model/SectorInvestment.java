package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sector_investments")
public class SectorInvestment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_sector", nullable = false)
    private Sector sector;

    @ManyToOne
    @JoinColumn(name = "id_investment", nullable = true)
    private Investments investment;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Sector getSector() {
        return sector;
    }

    public void setSector(Sector sector) {
        this.sector = sector;
    }

    public Investments getInvestment() {
        return investment;
    }

    public void setInvestment(Investments investment) {
        this.investment = investment;
    }
}