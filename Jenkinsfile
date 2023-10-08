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
            }
        }
        
        stage('Start application') {
            steps {
                sh 'npm run start'
            }
        }

    }
}