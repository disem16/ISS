package com.iss.app.User;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.iss.app.DataStore.DataStore;



@DataStore
public class UserDataStore {
	@PersistenceContext
	EntityManager entitymanager;

	@Autowired
	UserRepository usersRepository;
	public List<UserDTO> getUsers() {
		List<UserDTO> usersDTOList = new ArrayList<>();
		Iterable<User> usersList = usersRepository.findAll();
		for (User user : usersList) {
			usersDTOList.add(map(user));
		}
		return usersDTOList;
	}
	@Transactional

	/*public FunctieDTO get(long id){
		return map(functieRepository.findById(id));
	}"*/
	/**
	 * Maps the entity to the DTO.
	 * 
	 * @param {@link User}
	 * @return {@link UserDTO}
	 */
	private UserDTO map(User dbuser) {
		
		UserDTO user = new UserDTO();
		user.setAccessLevel(dbuser.getAccessLevel());
		user.setEmail(dbuser.getEmail());
		user.setIduser(dbuser.getIduser());
		user.setName(dbuser.getName());
		user.setUsername(dbuser.getUsername());
		user.setPassword(dbuser.getPassword());
		user.setAddress(dbuser.getAddress());
		user.setMaddress(dbuser.getMaddress());
		user.setMobile(dbuser.getMobile());
		user.setNationality(dbuser.getNationality());
		user.setPhoto(dbuser.getPhoto());
		
		return user;
	}

	/**
	 * Maps the DTO to the entity.
	 * 
	 * @param {@link UserDTO}
	 * @return {@link User}
	 */
	public User map(UserDTO user) {
		User dbuser = new User();
		if (0 != user.getIduser()) {
			//TODO:
			dbuser.setIduser(user.getIduser());
		}
		dbuser.setAccessLevel(user.getAccessLevel());
		dbuser.setEmail(user.getEmail());
		dbuser.setIduser(user.getIduser());
		dbuser.setName(user.getName());
		dbuser.setUsername(user.getUsername());
		dbuser.setPassword(user.getPassword());
		dbuser.setAddress(user.getAddress());
		dbuser.setMaddress(user.getMaddress());
		dbuser.setNationality(user.getNationality());
		dbuser.setMobile(user.getMobile());
		dbuser.setPhoto(user.getPhoto());
		
		return dbuser;
	}

	public UserDTO getn(String name) {
		UserDTO titlu=new UserDTO();
		List<UserDTO> usersDTOList = getUsers();
		for(UserDTO t : usersDTOList)
			//if(t.getAccountName().toLowerCase().equals(nume.toLowerCase()))  //fara tolowerCase
			if(t.getUsername().equals(name)||t.getEmail().equals(name))
			{
				//titlu.setId(t.getId());
				//titlu.setName(t.getName());
				titlu=t;
			}
		return titlu;	
	}
	public UserDTO getuserbyUsername(String name) {
		UserDTO titlu=new UserDTO();
		List<UserDTO> usersDTOList = getUsers();
		for(UserDTO t : usersDTOList)
			//if(t.getAccountName().toLowerCase().equals(nume.toLowerCase()))  //fara tolowerCase
			if(t.getUsername().equals(name))
			{
				//titlu.setId(t.getId());
				//titlu.setName(t.getName());
				titlu=t;
			}
		return titlu;	
	}

}
