import sys 
# Takes first name and last name via command  
# line arguments and then display them 
def Soma(value1,value2):
    soma = value1 + value2
    print(soma)

Soma(int(sys.argv[1]), int(sys.argv[2]))