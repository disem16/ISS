package com.iss.app.Rest;

public class PProposal {
	private int id;
	private String user;
	private String userReviewer;
	private byte[] document;
	private String domain;
	private Integer averagemark;
	private String name;
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getUserReviewer() {
		return userReviewer;
	}
	public void setUserReviewer(String userReviewer) {
		this.userReviewer = userReviewer;
	}
	public byte[] getDocument() {
		return document;
	}
	public void setDocument(byte[] document) {
		this.document = document;
	}
	public String getDomain() {
		return domain;
	}
	public void setDomain(String domain) {
		this.domain = domain;
	}
	public Integer getAveragemark() {
		return averagemark;
	}
	public void setAveragemark(Integer averagemark) {
		this.averagemark = averagemark;
	}
	

}
