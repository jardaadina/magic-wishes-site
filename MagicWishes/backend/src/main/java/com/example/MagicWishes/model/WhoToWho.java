package com.example.MagicWishes.model;

import jakarta.persistence.*;

@Entity
public class WhoToWho {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long userId1;
    private Long userId2;
    private Long secretSantaId;

    public WhoToWho() {

    }

    public WhoToWho(Long userId1, Long userId2, Long secretSantaId) {
        this.userId1 = userId1;
        this.userId2 = userId2;
        this.secretSantaId = secretSantaId;
    }

    @Override
    public String toString() {
        return "WhoToWho{" +
                "id=" + id +
                ", userId1=" + userId1 +
                ", userId2=" + userId2 +
                ", secretSantaId=" + secretSantaId +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId1() {
        return userId1;
    }

    public void setUserId1(Long userId1) {
        this.userId1 = userId1;
    }

    public Long getUserId2() {
        return userId2;
    }

    public void setUserId2(Long userId2) {
        this.userId2 = userId2;
    }

    public Long getSecretSantaId() {
        return secretSantaId;
    }

    public void setSecretSantaId(Long secretSantaId) {
        this.secretSantaId = secretSantaId;
    }
}
