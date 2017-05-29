package com.iss.app.AccessLevel;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;


import com.iss.app.DataStore.DataStore;



@DataStore
public class AccessLevelDataStore {
	@PersistenceContext
	EntityManager entitymanager;

	@Autowired
	AccessLevelRepository accessLevelRepository;
	public List<AccessLevelDTO> getAccesLevel() {
		List<AccessLevelDTO> gradesDTOList = new ArrayList<>();
		Iterable<AccessLevel> gradesList = accessLevelRepository.findAll();
		for (AccessLevel grade : gradesList) {
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
	 * @param {@link AccessLevel}
	 * @return {@link AccessLevelDTO}
	 */
	private AccessLevelDTO map(AccessLevel dbaccesslevel) {
		AccessLevelDTO accesslevel = new AccessLevelDTO();
		accesslevel.setIdlevel(dbaccesslevel.getIdlevel());
		accesslevel.setLevelName(dbaccesslevel.getLevelName());
		
		
		return accesslevel;
	}

	/**
	 * Maps the DTO to the entity.
	 * 
	 * @param {@link AccessLevelDTO}
	 * @return {@link AccessLevel}
	 */
	public AccessLevel map(AccessLevelDTO accesslevel) {
		AccessLevel dbaccesslevel = new AccessLevel();
		if (0 != dbaccesslevel.getIdlevel()) {
			//TODO:
			dbaccesslevel.setIdlevel(accesslevel.getIdlevel());
		}
		dbaccesslevel.setLevelName(accesslevel.getLevelName());
		
		
		
		return dbaccesslevel;
	}


}
