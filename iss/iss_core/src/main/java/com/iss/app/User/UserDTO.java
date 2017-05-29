package com.iss.app.User;

import java.util.Arrays;

import com.iss.app.AccessLevel.AccessLevel;

public class UserDTO {
	private long iduser;
	private String email;
	private String name;
	private AccessLevel accessLevel;
	private String username;
	private String password;
	private String maddress;
	private String address;
	private byte[] photo;
	private String nationality;
	private String mobile;
	
	
	public long getIduser() {
		return iduser;
	}
	public void setIduser(long iduser) {
		this.iduser = iduser;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public AccessLevel getAccessLevel() {
		return accessLevel;
	}
	public void setAccessLevel(AccessLevel accessLevel) {
		this.accessLevel = accessLevel;
	}
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	public String getMaddress() {
		return maddress;
	}
	public void setMaddress(String maddress) {
		this.maddress = maddress;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public byte[] getPhoto() {
		return photo;
	}
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	@Override
	public String toString() {
		return "UserDTO [iduser=" + iduser + ", email=" + email + ", name=" + name + ", accessLevel=" + accessLevel
				+ ", username=" + username + ", password=" + password + ", maddress=" + maddress + ", address="
				+ address + ", photo=" + Arrays.toString(photo) + ", nationality=" + nationality + ", mobile=" + mobile
				+ "]";
	}

	

}
