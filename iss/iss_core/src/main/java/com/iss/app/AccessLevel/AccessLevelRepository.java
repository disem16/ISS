package com.iss.app.AccessLevel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AccessLevelRepository extends CrudRepository<AccessLevel, Integer>{

}
