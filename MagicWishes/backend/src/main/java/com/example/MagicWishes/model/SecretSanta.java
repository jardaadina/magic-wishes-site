package com.example.MagicWishes.model;

import jakarta.persistence.*;

@Entity
public class SecretSanta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String title;
    private String place;

    public SecretSanta() {
    }

    public SecretSanta(String title, String place) {
        this.title = title;
        this.place = place;
    }

    @Override
    public String toString() {
        return "SecretSanta{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", place='" + place + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
}
