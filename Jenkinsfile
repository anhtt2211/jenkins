pipeline {
    agent any
    tools {nodejs "Node"}
    
    stage('Clone Repository'){
        steps{
            git branch: 'master',
                url: 'https://github.com/anhtt2211/jenkins.git'
        }
    }
    
    stage('Install Dependencies'){
        steps {
            bat 'npm install'
        }
    }
        stage('Install pm2'){
        steps {
            bat 'npm install pm2 -g'
        }
    }
    
    stage('Deploy'){
        steps {
            bat 'pm2 start index.js'
        }
    }
}
