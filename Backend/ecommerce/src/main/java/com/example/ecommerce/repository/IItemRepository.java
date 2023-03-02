package com.example.ecommerce.repository;

import com.example.ecommerce.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IItemRepository extends JpaRepository<Item, Long> {
    @Query(value = "select * from items i where i.order_id = :order_id", nativeQuery = true)
    List<Item> findByOrder_id(@Param("order_id") Long order_id);
//    List<Item> findByProduct_id(Long id);
}