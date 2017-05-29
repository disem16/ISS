package com.iss.app.Proposal;

import java.util.Arrays;

import com.iss.app.User.User;

public class ProposalDTO {
	private int idproposal;
	private User user;
	private User userReviewer;
	private String name;
	private byte[] document;
	private String domain;
	private Integer averagemark;
	public int getIdproposal() {
		return idproposal;
	}
	public void setIdproposal(int idproposal) {
		this.idproposal = idproposal;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public User getUserReviewer() {
		return userReviewer;
	}
	public void setUserReviewer(User userReviewer) {
		this.userReviewer = userReviewer;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	@Override
	public String toString() {
		return "ProposalDTO [idproposal=" + idproposal + ", user=" + user + ", userReviewer=" + userReviewer + ", name="
				+ name + ", document=" + Arrays.toString(document) + ", domain=" + domain + ", averagemark="
				+ averagemark + "]";
	}
	

}
