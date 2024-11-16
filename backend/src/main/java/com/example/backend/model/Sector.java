package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sector")
public class Sector {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    // Getters and Setters
    public Long getId(){ return id; }
    public String getName(){ return name; }

    public void setId(Long id){ this.id = id; }
    public void setName(String name){ this.name = name; }
}