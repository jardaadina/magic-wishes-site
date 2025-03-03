package com.example.MagicWishes.model;

import jakarta.persistence.*;

@Entity
public class Wish {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String title;
    private String description;
    private Long userId;
    private String date;
    private boolean active;
    private Long userIdWhoFulfill;

    public Wish() {
    }

    public Wish(String title, String description, Long userId, Long userIdWhoFulfill, String date, boolean active) {
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.userIdWhoFulfill = userIdWhoFulfill;
        this.date = date;
        this.active = active;
    }

    public Long getUserIdWhoFulfill() {
        return userIdWhoFulfill;
    }

    public void setUserIdWhoFulfill(Long userIdWhoFulfill) {
        this.userIdWhoFulfill = userIdWhoFulfill;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Wish{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", userId=" + userId +
                ", active=" + active +
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
