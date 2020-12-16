package org.acme.service;

import org.acme.entity.Person;
import org.acme.repository.DBRepository;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/person")
public class PersonService {

    @Inject
    DBRepository dbRepo = new DBRepository();


    // Initialisieren der DB
    @Path("init")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String init() {
        dbRepo.initDB();
        return "DB initialized";
    }

    // Liste aller Personen senden
    @Path("findAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Person> findAll() {
        return dbRepo.findAll();
    }

    // Eine Person senden
    @Path("find/{idPerson}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Person findAll(@PathParam("idPerson") int id) {
        return dbRepo.find(id);
    }

    // Eine Person löschen
    @Path("delete/{id}")
    @DELETE
    public Person deletePerson(@PathParam("id") int id) {
        return dbRepo.delete(id);
    }

    @Path("deleteAll")
    @DELETE
    public List<Person> deleteAll(){
        return dbRepo.deleteAll();
    }

    // Eine Person hinzufügen
    @Path("create")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Person createPerson(Person person) {
        return dbRepo.create(person);
    }

    // Eine Person ändern
    @Path("update")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Person updatePerson(Person person) {

        return dbRepo.update(person);
    }
}
