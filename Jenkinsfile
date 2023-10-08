pipeline {
    agent any
    tools {nodejs "Node"}
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'master']], userRemoteConfigs: [[url: 'https://github.com/anhtt2211/jenkins.git']]])
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install pm2 -g'
            }
        }
        
        stage('Start application') {
            steps {
                sh 'pm2 start index.js'
            }
        }

    }
}