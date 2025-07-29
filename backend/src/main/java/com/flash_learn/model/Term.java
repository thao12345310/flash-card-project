package com.flash_learn.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "terms")
@Getter
@Setter
public class Term extends BaseEntity {

    private String question;
    private String answer;
    private String imageUrl;
    private Integer orderIndex;

    @ManyToOne
    @JoinColumn(name = "set_id")
    private FlashcardSet flashcardSet;

    @ManyToMany(mappedBy = "starredTerms")
    private Set<User> starredByUsers = new HashSet<>();
}
