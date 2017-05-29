package com.iss.app.Conference;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.iss.app.DataStore.DataStore;



@DataStore

public class ConferenceDataStore {
	@PersistenceContext
	EntityManager entitymanager;

	@Autowired
	ConferenceRepository conferenceRepository;
	public List<ConferenceDTO> getConferences() {
		List<ConferenceDTO> gradesDTOList = new ArrayList<>();
		Iterable<Conference> gradesList = conferenceRepository.findAll();
		for (Conference grade : gradesList) {
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
	 * @param {@link Conference}
	 * @return {@link ConferenceDTO}
	 */
	private ConferenceDTO map(Conference dbconference) {
		ConferenceDTO conference = new ConferenceDTO();
		conference.setIdconference(dbconference.getIdconference());
		conference.setDeadline(dbconference.getDeadline());
		conference.setUser(dbconference.getUser());
		conference.setType(dbconference.getType());
		
		
		return conference;
	}

	/**
	 * Maps the DTO to the entity.
	 * 
	 * @param {@link ConferenceDTO}
	 * @return {@link Conference}
	 */
	public Conference map(ConferenceDTO conference) {
		Conference dbconference = new Conference();
		dbconference.setDeadline(conference.getDeadline());
		dbconference.setUser(conference.getUser());
		dbconference.setType(conference.getType());
		
		
		
		return dbconference;
	}
	public void save(ConferenceDTO c) {
		conferenceRepository.save(map(c));
		
	}
	public void delete(ConferenceDTO co) {
		// TODO Auto-generated method stub
		conferenceRepository.delete(co.getIdconference());
		
	}

}
