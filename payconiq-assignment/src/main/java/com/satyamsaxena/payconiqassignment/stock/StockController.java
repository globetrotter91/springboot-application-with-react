package com.satyamsaxena.payconiqassignment.stock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class StockController {
	
	@Autowired
	private StockService stockService;
	
	@RequestMapping("/stocks")
	@ResponseBody
	public ResponseEntity<List<Stock>> getAllStocks(/*@RequestParam("id") long id*/) {
		List<Stock> stocks = stockService.getAllStocks();
		return new ResponseEntity<List<Stock>>(stocks, HttpStatus.OK);
	}
	
	@RequestMapping("/stocks/{id}")
	@ResponseBody
	public Stock getOneStock(@PathVariable int id) {
		return stockService.getStock(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/stocks")
	@ResponseBody
	public void addStock(@RequestBody Stock stock) {
		stockService.addStock(stock);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/stocks/{id}")
	@ResponseBody
	public void updateStock(@RequestBody Stock stock, @PathVariable int id) {
		stockService.updateStock(id, stock);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/stocks/{id}")
	@ResponseBody
	public void deleteStock(@PathVariable int id) {
		stockService.deleteStock(id);
	}
	
	
}
