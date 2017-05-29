package com.iss.app.Mark;

import com.iss.app.Grade.Grade;
import com.iss.app.Proposal.Proposal;

public class MarkDTO {
	private long idmark;
	private Proposal proposal;
	private Grade grade;
	public long getIdmark() {
		return idmark;
	}
	public void setIdmark(long idmark) {
		this.idmark = idmark;
	}
	public Proposal getProposal() {
		return proposal;
	}
	public void setProposal(Proposal proposal) {
		this.proposal = proposal;
	}
	public Grade getGrade() {
		return grade;
	}
	public void setGrade(Grade grade) {
		this.grade = grade;
	}
	@Override
	public String toString() {
		return "MarkDTO [idmark=" + idmark + ", proposal=" + proposal + ", grade=" + grade + "]";
	}
	

}
