package com.iss.app.Rest;

import java.util.Date;
import java.util.List;

public class DConference {
	private String conference;
	private List<String> userList;
	private Date deadline;
	
	
	public Date getDeadline() {
		return deadline;
	}
	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}
	public String getConference() {
		return conference;
	}
	public void setConference(String conference) {
		this.conference = conference;
	}
	public List<String> getUserList() {
		return userList;
	}
	public void setUserList(List<String> userList) {
		this.userList = userList;
	}
	

}
