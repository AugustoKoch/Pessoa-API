package com.example.pessoaapi;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    @Autowired
    private PessoaRepository repository;

    @GetMapping("/todos")
    public List<Pessoa> buscarTodos(){
        return repository.findAll();
    }

    @GetMapping
    public Pessoa buscarPorId(@RequestParam(name = "id") Long id){
        Optional<Pessoa> opcao = repository.findById(id);
        return opcao.isPresent() ? opcao.get() : null;
    }

    @PostMapping
    public void cadastrar(@RequestBody Pessoa pessoa) {
        repository.save(pessoa);
    }

    @PutMapping
    public void atualizar(@RequestBody Pessoa pessoa) {
        repository.save(pessoa);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id){
        if(repository.existsById(id)){
            repository.deleteById(id);
        }
    }
}