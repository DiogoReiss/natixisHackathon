package com.example.backend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "news")
public class News {
    private @Id
    @GeneratedValue Long id;

    private String title;
    private String description;
    private String resume;

    public void setTitle(String title){ this.title = title; }
    public void setDescription(String description){ this.description = description; }
    public void setResume(String resume){ this.resume = resume; }

    public String getTitle(){ return title; }
    public String getDescription(){ return description; }
    public String getResume(){ return resume; }
}
