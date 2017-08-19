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
			
			
			
			repository.save(new Stock("Apple", 6.11));
			repository.save(new Stock("Snapple", 9.11));
			repository.save(new Stock("Rapple", 3.11 ));
			repository.save(new Stock("Bapple", 4.11 ));
			repository.save(new Stock("Stappel", 1.14));
		};
	}
}
