package com.iss.app.Grade;

public class GradeDTO {
	private long idgrade;
	private int number;
	private String name;
	public long getIdgrade() {
		return idgrade;
	}
	public void setIdgrade(long idgrade) {
		this.idgrade = idgrade;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "GradeDTO [idgrade=" + idgrade + ", number=" + number + ", name=" + name + "]";
	}
	

}
