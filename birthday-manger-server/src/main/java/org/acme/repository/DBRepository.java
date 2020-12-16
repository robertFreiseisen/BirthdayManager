package org.acme.repository;

import org.acme.entity.Person;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

/**
 *
 * @author Robert Freiseisen
 */
@ApplicationScoped
public class DBRepository {

    // Entitymanager erzeugen
    @Inject
    private EntityManager em ;

    // Initialisieren
    //@PostConstruct
    public void initDB() {
        this.create(new Person("Anton","Aigner","Austria", LocalDate.of(2002,12,24)));
    }

    // Finden einer Person über ID in der DB
    public Person find(int id) {
        return em.find(Person.class, id);
    }

    // Einfügen einer neuen Person in die DB
    @Transactional
    public Person create(Person person) {
        person.setId(null);
        em.persist(person);
        return person;
    }

    // Löschen einer Person
    @Transactional
    public Person delete(int id){
        Person person = this.find(id);
        em.remove(person);
        return person;
    }

    public List<Person> deleteAll(){
        List<Person> personList = em.createQuery("SELECT p FROM Person p").getResultList();
        personList.forEach(i -> em.remove(i));
        return personList;
    }

    public List<Person> findAll(){
        return em.createQuery("SELECT p FROM Person p").getResultList();
    }

    @Transactional
    public Person update(Person person){
        em.merge(person);
        return person;
    }
}
