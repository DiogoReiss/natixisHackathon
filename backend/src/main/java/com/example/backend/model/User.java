package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(name = "password")
    private String pass;
    private String location;
    private String email;
    private int risk;

    @Column(name = "returnrate")
    private Integer rtrn;

    private int duration;

    // Public no-args constructor for JPA
    public User() {}

    // All-args constructor
    public User(String name, String pass, String location, String email, int returnrate, int risk, int duration) {
        this.name = name;
        this.pass = pass;
        this.location = location;
        this.email = email;
        this.rtrn = returnrate;
        this.risk = risk;
        this.duration = duration;
    }

    // Getters and Setters
    public Long getId(){ return id; }
    public String getName() { return name; }
    public String getPass() { return pass; }
    public String getEmail() { return email; }
    public String getLocation(){ return location; }
    public int getDuration() { return duration; }
    public int getRisk() { return risk; }
    public int getReturnValue() { return rtrn; }

    public void setName(String name){ this.name = name; }
    public void setId(Long id){ this.id = id; }
    public void setPass(String pass){ this.pass = pass; }
    public void setEmail(String email) { this.email = email; }
    public void setLocation(String location) { this.location = location; }
    public void setRisk(int risk) { this.risk = risk; }
    public void setReturnValue(int returnrate){ this.rtrn = returnrate; }
    public void setDuration(int duration){ this.duration = duration; }
}
