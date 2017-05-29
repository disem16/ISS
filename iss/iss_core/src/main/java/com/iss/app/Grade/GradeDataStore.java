package com.iss.app.Grade;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.iss.app.DataStore.DataStore;


@DataStore
public class GradeDataStore {
	@PersistenceContext
	EntityManager entitymanager;

	@Autowired
	GradeRepository proposalRepository;
	public List<GradeDTO> getGrades() {
		List<GradeDTO> gradesDTOList = new ArrayList<>();
		Iterable<Grade> gradesList = proposalRepository.findAll();
		for (Grade grade : gradesList) {
			gradesDTOList.add(map(grade));
		}
		return gradesDTOList;
	}
	@Transactional

	/*public FunctieDTO get(long id){
		return map(functieRepository.findById(id));
	}"*/
	/**
	 * Maps the entity to the DTO.
	 * 
	 * @param {@link Grade}
	 * @return {@link GradeDTO}
	 */
	private GradeDTO map(Grade dbgrade) {
		GradeDTO grade = new GradeDTO();
		grade.setIdgrade(dbgrade.getIdgrade());
		grade.setName(dbgrade.getName());
		grade.setNumber(dbgrade.getNumber());
		
		
		return grade;
	}

	/**
	 * Maps the DTO to the entity.
	 * 
	 * @param {@link GradeDTO}
	 * @return {@link Grade}
	 */
	public Grade map(GradeDTO grade) {
		Grade dbgrade = new Grade();
		if (0 != dbgrade.getIdgrade()) {
			//TODO:
			dbgrade.setIdgrade(grade.getIdgrade());
		}
		dbgrade.setName(grade.getName());
		dbgrade.setNumber(grade.getNumber());
		
		
		
		return dbgrade;
	}

}
