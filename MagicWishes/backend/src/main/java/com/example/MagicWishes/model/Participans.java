package com.example.MagicWishes.model;

import jakarta.persistence.*;

@Entity
public class Participans {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true, nullable = false)
    private Long id;
    private Long userId;
    private Long secretSantaId;

    public Participans() {
    }

    public Participans(Long userId, Long secretSantaId) {
        this.userId = userId;
        this.secretSantaId = secretSantaId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getSecretSantaId() {
        return secretSantaId;
    }

    public void setSecretSantaId(Long secretSantaId) {
        this.secretSantaId = secretSantaId;
    }
}
