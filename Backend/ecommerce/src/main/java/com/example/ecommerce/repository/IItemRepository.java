package com.example.ecommerce.repository;
import com.example.ecommerce.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


//@Repository
public interface IItemRepository extends JpaRepository<Item, Long>
{
//    List<Item> findByOrder_id(Long id);
//    List<Item> findByProduct_id(Long id);
}