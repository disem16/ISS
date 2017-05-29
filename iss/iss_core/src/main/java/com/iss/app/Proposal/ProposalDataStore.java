package com.iss.app.Proposal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.iss.app.DataStore.DataStore;
import com.iss.app.User.UserDTO;



@DataStore
public class ProposalDataStore {
	@PersistenceContext
	EntityManager entitymanager;

	@Autowired
	ProposalRepository proposalRepository;
	public List<ProposalDTO> getProposals() {
		List<ProposalDTO> prloposalsDTOList = new ArrayList<>();
		Iterable<Proposal> proposalsList = proposalRepository.findAll();
		for (Proposal proposal : proposalsList) {
			prloposalsDTOList.add(map(proposal));
		}
		return prloposalsDTOList;
	}
	@Transactional

	/*public FunctieDTO get(long id){
		return map(functieRepository.findById(id));
	}"*/
	/**
	 * Maps the entity to the DTO.
	 * 
	 * @param {@link Proposal}
	 * @return {@link ProposalDTO}
	 */
	private ProposalDTO map(Proposal dbproposal) {
		ProposalDTO proposal = new ProposalDTO();
		proposal.setIdproposal(dbproposal.getIdproposal());
		proposal.setAveragemark(dbproposal.getAveragemark());
		proposal.setDocument(dbproposal.getDocument());
		proposal.setDomain(dbproposal.getDomain());
		proposal.setName(dbproposal.getName());
		proposal.setUser(dbproposal.getUser());
		proposal.setUserReviewer(dbproposal.getUserReviewer());
		
		
		return proposal;
	}

	/**
	 * Maps the DTO to the entity.
	 * 
	 * @param {@link ProposalDTO}
	 * @return {@link Proposal}
	 */
	public Proposal map(ProposalDTO proposal) {
		Proposal dbproposal = new Proposal();
		if (0 != dbproposal.getIdproposal()) {
			//TODO:
			dbproposal.setIdproposal(proposal.getIdproposal());
		}
		if(proposal.getAveragemark()!=null)
			dbproposal.setAveragemark(proposal.getAveragemark());
		
		dbproposal.setDocument(proposal.getDocument());
		dbproposal.setDomain(proposal.getDomain());
		dbproposal.setName(proposal.getName());
		dbproposal.setUser(proposal.getUser());
		if(proposal.getUserReviewer()!=null)
				dbproposal.setUserReviewer(proposal.getUserReviewer());
		
		
		
		return dbproposal;
	}
	public void save(ProposalDTO p) {
		// TODO Auto-generated method stub
		proposalRepository.save(map(p));		
	}
	public void delete(ProposalDTO p) {
		// TODO Auto-generated method stub
		
		proposalRepository.delete( p.getIdproposal());		
	}
	public ProposalDTO getid(long idproposal) {
		ProposalDTO titlu=new ProposalDTO();
		List<ProposalDTO> usersDTOList =getProposals();
		for(ProposalDTO t : usersDTOList)
			//if(t.getAccountName().toLowerCase().equals(nume.toLowerCase()))  //fara tolowerCase
			if(t.getIdproposal()==idproposal)
			{
				//titlu.setId(t.getId());
				//titlu.setName(t.getName());
				titlu=t;
			}
		return titlu;	
	}

	
}
