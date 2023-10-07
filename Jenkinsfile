pipeline {
    agent any
    
    stages {
        // stage('Checkout') {
        //     steps {
        //         checkout([$class: 'GitSCM', branches: [[name: 'master']], userRemoteConfigs: [[url: 'https://github.com/your-username/your-repo.git']]])
        //     }
        // }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build and Deploy') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here (e.g., using SSH or other methods)
            }
        }

    }
}
