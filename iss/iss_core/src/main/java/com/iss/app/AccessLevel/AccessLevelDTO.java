package com.iss.app.AccessLevel;

public class AccessLevelDTO {
	private long idlevel;
	private String levelName;
	public long getIdlevel() {
		return idlevel;
	}
	public void setIdlevel(long idlevel) {
		this.idlevel = idlevel;
	}
	public String getLevelName() {
		return levelName;
	}
	public void setLevelName(String levelName) {
		this.levelName = levelName;
	}
	@Override
	public String toString() {
		return "AccessLevelDTO [idlevel=" + idlevel + ", levelName=" + levelName + "]";
	}
	

}
