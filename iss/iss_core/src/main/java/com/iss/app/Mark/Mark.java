package com.iss.app.Mark;
// default package
// Generated May 3, 2017 9:30:35 PM by Hibernate Tools 5.1.0.Alpha1

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.iss.app.Grade.Grade;
import com.iss.app.Proposal.Proposal;

/**
 * TblMark generated by hbm2java
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "tbl_mark", schema = "iss_schema")
public class Mark implements java.io.Serializable {

	private long idmark;
	private Proposal proposal;
	private Grade grade;

	public Mark() {
	}

	public Mark(long idmark, Proposal fkIdproposal, Grade fkIdgrade) {
		this.idmark = idmark;
		this.proposal = fkIdproposal;
		this.grade = fkIdgrade;
	}

	@Id

	@Column(name = "idmark", nullable = false)
	public long getIdmark() {
		return this.idmark;
	}

	public void setIdmark(long idmark) {
		this.idmark = idmark;
	}
	@ManyToOne(targetEntity=Proposal.class)
	@JoinColumn(name="fk_idproposal")
	public Proposal getProposal() {
		return this.proposal;
	}

	public void setProposal(Proposal fkIdproposal) {
		this.proposal = fkIdproposal;
	}
	@ManyToOne(targetEntity=Grade.class)
	@JoinColumn(name="fk_idgrade")
	public Grade getGrade() {
		return this.grade;
	}

	public void setGrade(Grade fkIdgrade) {
		this.grade = fkIdgrade;
	}

}