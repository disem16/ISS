package com.iss.app.Proposal;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProposalRepository extends CrudRepository<Proposal, Integer> {

}
