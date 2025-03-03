package com.example.MagicWishes.service;

import com.example.MagicWishes.model.Wish;
import com.example.MagicWishes.repository.WishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishService {

    private final WishRepository repository;

    @Autowired
    public WishService(WishRepository repository) {
        this.repository = repository;
    }

    public Wish save(Wish wish) {
        return repository.save(wish);
    }

    public List<Wish> findAllWishesForUserId(Long userId) {
        return repository.findAllByUserId(userId);
    }

    public List<Wish> findAll(){
        return repository.findAll();
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public Wish editWishStatus(Wish wish) {
        return repository.save(wish);
    }

}
