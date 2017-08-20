package com.satyamsaxena.payconiqassignment;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.satyamsaxena.payconiqassignment.stock.Stock;
import com.satyamsaxena.payconiqassignment.stock.StockRepository;

@SpringBootApplication
public class PayconiqAssignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(PayconiqAssignmentApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(StockRepository repository) {
		return (args) -> {
			// save a couple of customers
			
			repository.save(new Stock("King's Landing", 1.14));
			repository.save(new Stock("Winterfell", 4.94));
			repository.save(new Stock("High Garden", 2.04));
			repository.save(new Stock("Dragon Stone", 5.14));
			repository.save(new Stock("Dorne", 1.74));
			repository.save(new Stock("Casterly Rock", 1.54));
			repository.save(new Stock("Iron Islands", 3.12));
		};
	}
}
