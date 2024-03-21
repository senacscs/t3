let isBrazilTime = true; // Variável que armazena o estado do fuso horário (inicialmente como Brasília)

// Função que formata a hora com base em um fuso horário específico
        function formatTime(date, timeZone) {
            // Configuração das opções de formatação
            const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone };
            // Utilização da API Intl.DateTimeFormat para obter a hora formatada
            return new Intl.DateTimeFormat('pt-BR', options).format(date);
        }

        // Função que atualiza o relógio, a localização e a diferença de tempo
        function updateClock() {
            // Obtendo elementos do HTML
            const clockElement = document.getElementById('clock');
            const locationElement = document.getElementById('location');
            const timeDifferenceElement = document.getElementById('time-difference');
            // Obtendo a data e hora atual
            const now = new Date();
// Verificando se estamos exibindo o horário de Brasília ou dos Estados Unidos
            if (isBrazilTime) {
                // Exibindo o horário de Brasília
                clockElement.textContent = formatTime(now, 'America/Sao_Paulo');
                locationElement.textContent = 'Brasília';
 // Obtendo o horário dos Estados Unidos e calculando a diferença de tempo
                const usTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
                timeDifferenceElement.textContent = `Diferença com os Estados Unidos: ${calculateTimeDifference(now, new Date(usTime))}`;
            } else {
                 // Exibindo o horário dos Estados Unidos
                clockElement.textContent = formatTime(now, 'America/New_York');
                locationElement.textContent = 'Estados Unidos';
 // Obtendo o horário de Brasília e calculando a diferença de tempo
                const brasiliaTime = new Date().toLocaleString('America/Brasilia', { timeZone: 'America/Sao_Paulo' });
                timeDifferenceElement.textContent = `Diferença com Brasília: ${calculateTimeDifference(now, new Date(brasiliaTime))}`;
            }
        }
// Função que alterna entre os fusos horários
        function toggleTimeZone() {
            isBrazilTime = !isBrazilTime;// Inverte o valor de isBrazilTime
            updateClock();// Atualiza o relógio com o novo fuso horário
        }
// Função que calcula a diferença de tempo entre duas datas
        function calculateTimeDifference(date1, date2) {
            const difference = date1.getTime() - date2.getTime();
            const sign = (difference >= 0) ? 'atrás' : 'à frente';// Verifica se date1 está atrás ou à frente de date2
            const absDifference = Math.abs(difference);
// Convertendo a diferença em horas e minutos
            const hoursDifference = Math.floor(absDifference / (1000 * 60 * 60));
            const minutesDifference = Math.floor((absDifference % (1000 * 60 * 60)) / (1000 * 60));
// Retornando a diferença formatada
            return `${hoursDifference} horas e ${minutesDifference} minutos ${sign}`;
        }
// Configurando a atualização automática do relógio a cada segundo
        setInterval(updateClock, 1000);
        // Chamando a função updateClock() uma vez para exibir a hora inicial
        updateClock();  