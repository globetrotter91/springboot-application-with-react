package com.satyamsaxena.payconiqassignment.stock;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;

@RestController
@RequestMapping("/api/stocks")
@Api(value="StocksControllerAPI")
public class StockController {
	
	@Autowired
	private StockService stockService;
	
	@RequestMapping(path="", method=RequestMethod.GET)
	@ApiOperation("get a list of stocks")
	public ResponseEntity<List<Stock>> getAllStocks() {
		List<Stock> stocks = stockService.getAllStocks();
		return new ResponseEntity<List<Stock>>(stocks, HttpStatus.OK);
	}
	
	@RequestMapping(path="{id}", method=RequestMethod.GET)
	@ApiOperation("get a stock with id")
	@ApiResponses(value = {@ApiResponse(code = 200, message = "OK", response = Stock.class )})
	public ResponseEntity<Stock> getOneStock(@PathVariable int id) {
		Stock stock = stockService.getStock(id);
		if(stock == null) {
			return new ResponseEntity<Stock>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Stock>(stock, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("creates a stock")
	@ResponseBody
	public void addStock(@RequestBody Stock stock) {
		stockService.addStock(stock);
	}
	
	@RequestMapping(path = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("update a stock with id")
	@ResponseBody
	public void updateStock(@RequestBody Stock stock, @PathVariable int id) {
		stockService.updateStock(id, stock);
	}
	
	@RequestMapping(path = "{id}", method = RequestMethod.DELETE)
	@ApiOperation("delete a stock with id")
	@ResponseBody
	public void deleteStock(@PathVariable int id) {
		stockService.deleteStock(id);
	}
	
	
}
