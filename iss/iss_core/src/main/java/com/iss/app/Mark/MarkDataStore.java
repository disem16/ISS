package com.iss.app.Mark;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.iss.app.DataStore.DataStore;





@DataStore
public class MarkDataStore {
	@PersistenceContext
	EntityManager entitymanager;

	@Autowired
	MarkRepository proposalRepository;
	public List<MarkDTO> getMarks() {
		List<MarkDTO> marksDTOList = new ArrayList<>();
		Iterable<Mark> marksList = proposalRepository.findAll();
		for (Mark mark : marksList) {
			marksDTOList.add(map(mark));
		}
		return marksDTOList;
	}
	@Transactional

	/*public FunctieDTO get(long id){
		return map(functieRepository.findById(id));
	}"*/
	/**
	 * Maps the entity to the DTO.
	 * 
	 * @param {@link Mark}
	 * @return {@link MarkDTO}
	 */
	private MarkDTO map(Mark dbmark) {
		MarkDTO mark = new MarkDTO();
		mark.setIdmark(dbmark.getIdmark());
		mark.setProposal(dbmark.getProposal());
		mark.setGrade(dbmark.getGrade());
		
		
		return mark;
	}

	/**
	 * Maps the DTO to the entity.
	 * 
	 * @param {@link MarkDTO}
	 * @return {@link Mark}
	 */
	public Mark map(MarkDTO mark) {
		Mark dbmark = new Mark();
		if (0 != dbmark.getIdmark()) {
			//TODO:
			dbmark.setIdmark(mark.getIdmark());
		}
		dbmark.setProposal(mark.getProposal());
		dbmark.setGrade(mark.getGrade());
		
		
		
		return dbmark;
	}

}
