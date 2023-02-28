package com.example.ecommerce.repository;

import com.example.ecommerce.model.Offer;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
@Transactional
public interface IOfferRepository extends JpaRepository<Offer, Long> {

}
