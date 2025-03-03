package com.example.MagicWishes;


import com.example.MagicWishes.model.Wish;
import com.example.MagicWishes.service.WishService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wish")
public class WishResource {

    private final WishService wishService;
    public WishResource(WishService wishService) {
        this.wishService = wishService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Wish>> getAllWishs() {
        List<Wish> allWishes = wishService.findAll();
        return new ResponseEntity<>(allWishes, HttpStatus.OK);
    }

    @GetMapping("/allbyuser/{id}")
    public ResponseEntity<List<Wish>> getWishListByUser(@PathVariable("id") Long id) {
        List<Wish> wishes = wishService.findAllWishesForUserId(id);
        return new ResponseEntity<>(wishes, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Wish> addWish(@RequestBody Wish wish) {
        Wish newWish = wishService.save(wish);
        return new ResponseEntity<>(newWish, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Wish> deleteWish(@PathVariable("id") Long id) {
        wishService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/updated")
    public ResponseEntity<Wish> updateWish(@RequestBody Wish wish) {
        System.out.println(wish);
        wishService.editWishStatus(wish);
        return new ResponseEntity<>(wish, HttpStatus.OK);
    }

}
