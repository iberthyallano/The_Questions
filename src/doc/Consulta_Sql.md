## Consulta SQL

Faça um relatório sobre os funcionários que estão registrados no banco de dados a partir dos registros existentes no banco de dados com a seguinte estrutura:

Dados da Tabela 'funcionario':

1. id_funcionario (PK)	    numeric	
2. nome	                    varchar (255)	
3. uf                       char (2)
4. ano_nascimento           numeric

Dados da Tabela 'projeto':

1. id_projeto (PK)	        numeric	
2. nome	                    varchar (255)
3. data_inicio              datetime
4. data_fim                 datetime

Dados da Tabela 'funcionario_projeto':

1. id_funcionario (PK)	    numeric	
2. id_projeto (PK)          numeric	


Seu trabalho, agora é selecionar todos os funcionários que residem no Rio de Janeiro, possuem mais de 20 anos de idade e já trabalharam em mais de 3 projetos finalizados.

**********
EXEMPLO de Tabelas:
**********
<table >
    <thead>
        <tr>
            <th>funcionario</th>
            <th>projeto</th>
            <th>funcionario_projeto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <table>
                    <thead>
                        <tr>
                            <th>id_funcionario</th>
                            <th>nome</th>
                            <th>uf</th>
                            <th>ano_nascimento</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr><td>1  </td><td>Funcionário 1  </td><td>RJ</td><td>1991</td></tr>
                            <tr><td>2  </td><td>Funcionário 2  </td><td>RJ</td><td>1989</td></tr>
                            <tr><td>3  </td><td>Funcionário 3  </td><td>SP</td><td>1978</td></tr>
                            <tr><td>14 </td><td>Funcionário 4  </td><td>RJ</td><td>2000</td></tr>
                            <tr><td>15 </td><td>Funcionário 5  </td><td>RJ</td><td>1996</td></tr>
                            <tr><td>21 </td><td>Funcionário 6  </td><td>MG</td><td>1993</td></tr>
                            <tr><td>23 </td><td>Funcionário 9  </td><td>RJ</td><td>1999</td></tr>
                            <tr><td>25 </td><td>Funcionário 10 </td><td>RJ</td><td>1992</td></tr>
                            <tr><td>26 </td><td>Funcionário 13 </td><td>RJ</td><td>1988</td></tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table>
                    <thead>
                        <tr>
                            <th>id_projeto</th>
                            <th>nome</th>
                            <th>data_inicio</th>
                            <th>data_fim</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr><td>1  </td><td> Projeto 1  </td><td> 01/03/2010 </td><td> 01/09/2010</td></tr>
                            <tr><td>2  </td><td> Projeto 2  </td><td> 01/09/2011 </td><td> 01/09/2012</td></tr>
                            <tr><td>3  </td><td> Projeto 3  </td><td> 01/10/2012 </td><td> 01/02/2013</td></tr>
                            <tr><td>4  </td><td> Projeto 4  </td><td> 01/08/2012 </td><td> 01/03/2014</td></tr>
                            <tr><td>5  </td><td> Projeto 5  </td><td> 01/04/2013 </td><td> 01/12/2014</td></tr>
                            <tr><td>6  </td><td> Projeto 6  </td><td> 01/03/2015 </td><td> 01/09/2016</td></tr>
                            <tr><td>7  </td><td> Projeto 9  </td><td> 01/06/2015 </td><td> 01/09/2017</td></tr>
                            <tr><td>8  </td><td> Projeto 10 </td><td> 01/07/2016 </td><td>           </td></tr>
                            <tr><td>9  </td><td> Projeto 13 </td><td> 01/12/2017 </td><td>           </td></tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table>
                    <thead>
                        <tr>
                            <th>id_funcionario</th>
                            <th>id_projeto</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr><td>1 </td><td> 2   </td> </tr>
                            <tr><td>1 </td><td> 1   </td> </tr>
                            <tr><td>1 </td><td> 3   </td> </tr>
                            <tr><td>1 </td><td> 4   </td> </tr>
                            <tr><td>2 </td><td> 1   </td> </tr>
                            <tr><td>3 </td><td> 1   </td> </tr>
                            <tr><td>4 </td><td> 1   </td> </tr>
                            <tr><td>3 </td><td> 4   </td> </tr>
                            <tr><td>2 </td><td> 3   </td> </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

