package com.iss.app.Rest;

import java.util.Arrays;

public class PUserData {
	
	private String name;
	private String maddress;
	private String address;
	private byte[] photo;
	private String nationality;
	private String mobile;
	
	public PUserData() {
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
		return "PUserData [name=" + name + ", maddress=" + maddress + ", address=" + address + ", photo="
				+ Arrays.toString(photo) + ", nationality=" + nationality + ", mobile=" + mobile + "]";
	}
	
	
	
	
}
