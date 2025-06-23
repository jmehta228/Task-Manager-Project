package com.msd.Task_Manager.repository;

import com.msd.Task_Manager.model.TaskModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<TaskModel, String> {

}
