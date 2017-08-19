package com.satyamsaxena.payconiqassignment.stock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {
	
	@Autowired
	private StockRepository stockRepo;
		
	public List<Stock> getAllStocks(){
		
		List<Stock> stocks = new ArrayList<>();
		
		stockRepo.findAll()
		.forEach(stocks::add);
		
		return stocks;
	}
	
	public Stock getStock(long id) {
		return stockRepo.findOne(id);
	}
	
	
	public void addStock(Stock stock) {
		stock.setLastUpdate();
		stockRepo.save(stock);
	}
	
	public void updateStock(int id, Stock stock) {
		stock.setLastUpdate();
		stockRepo.save(stock);
	}
	
	public void deleteStock(long id) {
		//stocks.removeIf(st -> st.getId()==id);
		stockRepo.delete(id);
	}
}
