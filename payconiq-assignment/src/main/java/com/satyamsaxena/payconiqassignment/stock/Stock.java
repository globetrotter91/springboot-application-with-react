package com.satyamsaxena.payconiqassignment.stock;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stock {
	
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String name;
	private double currentPrice;
	private Date lastUpdate;		
	
	public Stock() {
			
	}
	
	
	public Stock(String name, double currentPrice) {
		super();
		this.name = name; 
		this.currentPrice = currentPrice;
		this.lastUpdate = new Date();
	}

	
	public Stock(long id, String name, double currentPrice, Date lastUpdate) {
		super();
		this.id = id;
		this.name = name;
		this.currentPrice = currentPrice;
		this.lastUpdate = lastUpdate;
	}
	
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getCurrentPrice() {
		return currentPrice;
	}
	public void setCurrentPrice(double currentPrice) {
		this.currentPrice = currentPrice;
	}
	public Date getLastUpdate() {
		return lastUpdate;
	}
	public void setLastUpdate() {
		this.lastUpdate = new Date();
	}
	
	
	
}
