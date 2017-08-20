package com.satyamsaxena.payconiqassignment.stock;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;

public interface StockRepository extends JpaRepository<Stock, Long>{

}
