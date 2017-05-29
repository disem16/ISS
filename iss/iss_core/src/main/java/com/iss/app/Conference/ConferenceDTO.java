package com.iss.app.Conference;

import java.util.Date;

import com.iss.app.User.User;

public class ConferenceDTO {
	private int idconference;
	private Date deadline;
	private String type;
	private User user;
	public int getIdconference() {
		return idconference;
	}
	public void setIdconference(int idconference) {
		this.idconference = idconference;
	}
	public Date getDeadline() {
		return deadline;
	}
	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "ConferenceDTO [idconference=" + idconference + ", deadline=" + deadline + ", type=" + type + ", user="
				+ user + "]";
	}
	

}
