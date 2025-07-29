package com.flash_learn.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "flashcard_sets")
@Getter
@Setter
public class FlashcardSet extends BaseEntity {

    private String title;

    private String description;

    private boolean isPublic;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @ManyToOne
    @JoinColumn(name = "folder_id")
    private Folder folder;

    @OneToMany(mappedBy = "flashcardSet", cascade = CascadeType.ALL)
    private List<Term> terms = new ArrayList<>();

    // Danh sách user được phép chỉnh sửa
    @ElementCollection
    @CollectionTable(name = "set_editors", joinColumns = @JoinColumn(name = "set_id"))
    @Column(name = "user_id")
    private Set<UUID> allowEditUserIds = new HashSet<>();
}
